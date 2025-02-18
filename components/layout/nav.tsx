import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const headingsRef = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      let currentId: string | null = null;

      headingsRef.current.forEach((heading) => {
        if (heading && heading.offsetTop <= scrollPosition) {
          currentId = heading.dataset.id ?? null;
        }
      });

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        currentId =
          headingsRef.current[headingsRef.current.length - 1]?.dataset.id ??
          null;
      }

      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    const target = headingsRef.current.find((el) => el?.dataset.id === id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: "smooth",
      });

      setActiveId(id);
    }
  };

  return (
    <div className="relative min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* 블로그 본문 */}
      <main className="flex flex-col gap-8 items-start w-full max-w-3xl mx-auto">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        {/* 제목 및 본문 */}
        {[
          { id: "section1", title: "제목 1", tag: "h1" },
          { id: "section2", title: "제목 1-1", tag: "h2" },
          { id: "section3", title: "제목 1-1-1", tag: "h3" },
          { id: "section4", title: "제목 2", tag: "h1" },
          { id: "section5", title: "제목 2-1", tag: "h2" },
          { id: "section6", title: "제목 2-1-1", tag: "h3" },
        ].map((section, index) => (
          <section key={section.id} className="mb-16">
            {section.tag === "h1" ? (
              <h1
                data-id={section.id}
                ref={(el) => {
                  if (el) {
                    headingsRef.current[index] = el;
                  }
                }}
                className="text-3xl font-bold mt-8"
              >
                {section.title}
              </h1>
            ) : section.tag === "h2" ? (
              <h2
                data-id={section.id}
                ref={(el) => {
                  if (el) {
                    headingsRef.current[index] = el;
                  }
                }}
                className="text-2xl font-semibold mt-6"
              >
                {section.title}
              </h2>
            ) : (
              <h3
                data-id={section.id}
                ref={(el) => {
                  if (el) {
                    headingsRef.current[index] = el;
                  }
                }}
                className="text-xl font-medium mt-4"
              >
                {section.title}
              </h3>
            )}
            <p className="mt-4 text-gray-700 leading-7">
              {Array(4)
                .fill(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fringilla velit non justo eleifend."
                )
                .join(" ")}
            </p>
          </section>
        ))}

        {/* 🔥 스크롤을 위한 추가 여백 */}
        <div className="h-[50vh]" />
      </main>

      {/* 트리 구조 네비게이션 */}
      <nav className="fixed top-1/3 right-10 w-64 hidden lg:block">
        <div className="bg-white shadow-lg border border-gray-200 rounded-lg p-4">
          <ul className="space-y-2">
            {[
              { id: "section1", title: "제목 1", tag: "h1" },
              { id: "section2", title: "제목 1-1", tag: "h2" },
              { id: "section3", title: "제목 1-1-1", tag: "h3" },
              { id: "section4", title: "제목 2", tag: "h1" },
              { id: "section5", title: "제목 2-1", tag: "h2" },
              { id: "section6", title: "제목 2-1-1", tag: "h3" },
            ].map((item) => (
              <li
                key={item.id}
                className={`${
                  item.tag === "h2" ? "ml-4" : item.tag === "h3" ? "ml-8" : ""
                }`}
              >
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left block px-4 py-2 rounded transition-colors text-gray-700 hover:bg-gray-100 ${
                    activeId === item.id
                      ? "bg-yellow-300 font-bold text-gray-900"
                      : ""
                  }`}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
