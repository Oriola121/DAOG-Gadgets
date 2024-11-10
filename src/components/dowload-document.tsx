import { Download, X } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { useEffect, useState } from "react";

type DownloadDocumentProps = {
  url: string;
  onClose: () => void;
};

type FileType = "image" | "document" | "unknown";

export const DownloadDocument = ({ url, onClose }: DownloadDocumentProps) => {
  const [fileType, setFileType] = useState<FileType>("unknown");
  const [objectUrl, setObjectUrl] = useState<string>("");
  const [fileName, setFileName] = useState<string>("Document");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const detectFileType = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Check if it's a direct image URL by file extension
        const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];
        if (imageExtensions.some((ext) => url.toLowerCase().endsWith(ext))) {
          setFileType("image");
          setObjectUrl(url);
          const urlFileName = url.split("/").pop() || "Image";
          setFileName(decodeURIComponent(urlFileName));
          setIsLoading(false);
          return;
        }

        // For other files, fetch and check content type
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to load file");

        const contentType = response.headers.get("content-type") || "";
        const contentDisposition = response.headers.get("content-disposition");

        // Extract filename from content-disposition
        if (contentDisposition) {
          const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
          const matches = filenameRegex.exec(contentDisposition);
          if (matches && matches[1]) {
            let extractedName = matches[1].replace(/['"]/g, "");
            // Decode the filename if it's encoded
            try {
              extractedName = decodeURIComponent(extractedName);
            } catch (e) {
              // If decoding fails, use as is
            }
            setFileName(extractedName);
          }
        } else {
          // If no content-disposition, try to get filename from URL
          const urlFileName = url.split("/").pop();
          if (urlFileName) {
            try {
              setFileName(decodeURIComponent(urlFileName));
            } catch (e) {
              setFileName(urlFileName);
            }
          }
        }

        const blob = await response.blob();
        const newObjectUrl = URL.createObjectURL(blob);
        setObjectUrl(newObjectUrl);

        if (contentType.startsWith("image/")) {
          setFileType("image");
        } else if (
          contentType.includes("pdf") ||
          contentType.includes("msword") ||
          contentType.includes("officedocument") ||
          contentType.includes("application/vnd.ms-")
        ) {
          setFileType("document");
        } else {
          setFileType("unknown");
        }
      } catch (error) {
        console.error("Error loading file:", error);
        setError("Failed to load file. Please try downloading instead.");
        setFileType("unknown");
      } finally {
        setIsLoading(false);
      }
    };

    if (url) {
      detectFileType();
    }

    return () => {
      if (objectUrl && objectUrl !== url) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [url]);

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Download failed");

      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.style.display = "none";
      link.href = downloadUrl;
      link.download = fileName; // Use the detected/stored filename

      document.body.appendChild(link);
      link.click();

      // Clean up
      setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(downloadUrl);
      }, 100);
    } catch (error) {
      console.error("Download failed:", error);
      setError("Download failed. Please try again.");
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FFCE14]" />
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center text-gray-500">
          <p>{error}</p>
        </div>
      );
    }

    switch (fileType) {
      case "image":
        return (
          <img
            src={objectUrl}
            alt={fileName}
            className="max-h-[80vh] max-w-full object-contain rounded-lg"
            title={fileName}
          />
        );
      case "document":
        return (
          <iframe
            src={objectUrl}
            className="w-full h-full border-none"
            title={fileName}
          />
        );
      default:
        return (
          <div className="text-center text-gray-500">
            <p>Preview not available</p>
            <p className="text-sm mt-2">Click download to view the file</p>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-primary z-50 flex flex-col">
      <div className="bg-muted p-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-white">{fileName}</h2>
        <div className="flex items-center gap-4">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-[#3A3A3A] transition-colors"
          >
            <Download size={18} className="text-[#FFCE14]" />
            <span className="text-white text-sm">Download</span>
          </button>

          <button
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-[#3A3A3A] transition-colors"
          >
            <X size={18} className="text-[#FF858A]" />
            <span className="text-white text-sm">Close</span>
          </button>
        </div>
      </div>

      <ScrollArea className="flex-1 bg-primary-foreground">
        <div className="w-full h-full min-h-[calc(100vh-5rem)] flex items-center justify-center">
          {renderContent()}
        </div>
      </ScrollArea>
    </div>
  );
};
