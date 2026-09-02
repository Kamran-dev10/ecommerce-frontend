import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  currentPage?: string;
  items?: BreadcrumbItem[];
};

export const Breadcrumb = ({
  currentPage,
  items,
}: BreadcrumbProps) => {

  return (

    <div className="flex items-center gap-3 text-sm font-semibold text-gray-500 py-6 flex-wrap">

      {/* Dynamic Breadcrumb */}
      {items ? (

        items.map((item, index) => (

          <div
            key={index}
            className="flex items-center gap-3"
          >

            {item.href ? (

              <Link
                href={item.href}
                className="hover:text-black transition duration-200"
              >
                {item.label}
              </Link>

            ) : (

              <span className="text-black font-bold">
                {item.label}
              </span>

            )}

            {index !== items.length - 1 && (
              <span className="text-gray-400">{">"}</span>
            )}

          </div>

        ))

      ) : (

        <>
          {/* Old Version Support */}
          <Link
            href="/"
            className="hover:text-black transition duration-200"
          >
            Home
          </Link>

          <span className="text-gray-400">{">"}</span>

          <span className="text-black font-bold">
            {currentPage}
          </span>
        </>

      )}

    </div>
  );
};