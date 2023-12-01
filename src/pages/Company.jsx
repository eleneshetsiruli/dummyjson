import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Footer } from "./Footer";
const Company = () => {
  const position = [42.33, 43.308];
  function MyComponent() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Leaders
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-col items-center gap-20">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pt-10">
          Our Company
        </h2>
        <p className="w-[600px] h-[100px] text-[19px] text-gray-400">
          We connect people and build communities to create economic opportunity
          for all. we create pathways to connect millions of sellers and buyers
          in more than 190 markets around the world. Our technology empowers our
          customers, providing everyone the opportunity to grow and thrive — no
          matter who they are or where they are in the world. And the ripple
          effect of our work creates waves of change for our custo
        </p>
        <MapContainer
          center={position}
          zoom={5}
          style={{ height: "400px", width: "600px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              A sample marker at {position[0]}, {position[1]}.
            </Popup>
          </Marker>
        </MapContainer>
        <MyComponent />
      </div>
      <div className="flex flex-col">
        <Footer />
      </div>
    </>
  );
};

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "How to use search engine optimization to drive sales",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Apr 10, 2022",
    datetime: "2020-03-16",
    category: { title: "Sales", href: "#" },
    author: {
      name: "Michaela Adams",
      role: "Developer/ CTO",
      href: "#",
      imageUrl:
        "data:image/jpeg;base64,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",
    },
  },
  {
    id: 3,
    title: "Improve your customer experience",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Feb 12, 2023",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Tom Cook",
      role: "Director/ CTO",
      href: "#",
      imageUrl:
        "  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDxEjIh3dGm94I_hwVByxG08ZY64lZU7qjhA&usqp=CAU",
    },
  },
];

export default Company;
