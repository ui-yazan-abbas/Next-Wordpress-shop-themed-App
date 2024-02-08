import { NextResponse } from "next/server";
import { Context } from "vm";

import data from "./data.json";

export async function GET(request: Request, context: Context) {
  const { params } = context;
  const product = data.filter((x) => params.id === x.id);

  return NextResponse.json(product, { status: 200 });
}
