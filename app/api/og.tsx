import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export const handler = (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);

    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : undefined;

    return new ImageResponse(
      (
        <div
          style={{
            minWidth: 1200,
            minHeight: 630,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "64px",
            paddingRight: "64px",
          }}
        >
          <h1
            style={{
              fontSize: "96px",
              fontWeight: 900,
            }}
          >
            STREAM@S
          </h1>
          <p style={{ fontSize: "32px" }}>
            ストリーミングで楽しむアイドルマスターシリーズの音楽
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              minWidth: 1072,
              minHeight: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                color: "transparent",
                backgroundColor: "#f34e6c",
                flexGrow: 1,
                minHeight: "20px",
              }}
            >
              a
            </div>
            <div
              style={{
                display: "flex",
                color: "transparent",
                backgroundColor: "#2581c7",
                flexGrow: 1,
                minHeight: "20px",
              }}
            >
              a
            </div>
            <div
              style={{
                display: "flex",
                color: "transparent",
                backgroundColor: "#ffc20b",
                flexGrow: 1,
                minHeight: "20px",
              }}
            >
              a
            </div>
            <div
              style={{
                display: "flex",
                color: "transparent",
                backgroundColor: "#11be93",
                flexGrow: 1,
                minHeight: "20px",
              }}
            >
              a
            </div>
            <div
              style={{
                display: "flex",
                color: "transparent",
                backgroundColor: "#8dbaff",
                flexGrow: 1,
                minHeight: "20px",
              }}
            >
              a
            </div>
          </div>
          <p style={{ fontSize: "64px" }}>{title}</p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response("Failed to generate the image", { status: 500 });
  }
};

export default handler;
