import { NextResponse } from "next/server";
import { prisma } from "@daog/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "8");
  const offset = (page - 1) * limit;

  try {
    const products = await prisma.product.findMany({
      take: limit,
      skip: offset,
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
