import { useState } from "react";

const Component = ({ title, description, isActive, onToggleShow }) => {

    return (
        <div>
            <h3 className="text-2xl font-semibold">{title}</h3>
            {isActive ? (
                <button
                    className="cursor-pointer underline"
                    onClick={onToggleShow}
                >
                    Hide
                </button>
            ) : (
                <button
                    className="cursor-pointer underline"
                    onClick={onToggleShow}
                >
                    Show
                </button>
            )
            }

            {isActive && <p>{description}</p>}
        </div>
    );
};

const Instamart = () => {
    const [activeComponent, setActiveComponent] = useState(null);
    const handleActiveComponent = (componentId) => {
        setActiveComponent(componentId === activeComponent ? null : componentId)
    }
    return (
        <div className="m-20">
            <Component
                title="About"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, consequatur eaque? Eaque, eveniet numquam vel tempora nihil asperiores, molestiae culpa architecto provident, fugit magnam soluta quae doloremque! Error nulla dolorum quisquam atque. Quas officiis vitae tempora? Quasi asperiores, expedita ipsam quaerat ratione voluptate nisi illo perspiciatis soluta, sit veritatis aperiam eaque voluptates dicta quae similique ducimus voluptatum saepe omnis numquam fugiat incidunt autem, nam officia. Cumque nihil ipsa vel cum a molestiae repellendus laboriosam, officia, alias totam debitis culpa porro accusantium! Dolor, quaerat consequatur eaque odio, eligendi optio aliquam adipisci distinctio porro asperiores corporis repellendus sint earum. Amet corrupti accusantium ducimus, aspernatur est reprehenderit non neque quod quis facere totam dolor natus numquam asperiores unde, vero fugit iure commodi necessitatibus. Vel sapiente officia expedita maiores, quam tenetur temporibus. Aut consectetur, nam unde sit incidunt dignissimos eius. Ab magni aperiam voluptatem natus tempore tenetur aliquid. Omnis quibusdam ipsum ex cum illo tempore, vel numquam cumque, molestias dolor at, ut sed aperiam saepe reiciendis asperiores veniam modi facere recusandae eaque alias harum aliquid ducimus. Consequatur mollitia velit nihil sed obcaecati tenetur quas eveniet nostrum, sunt est veritatis ea vitae eaque laborum optio ut inventore sit exercitationem. Reprehenderit consequatur et laborum vitae nam."
                isActive={activeComponent === 1}
                onToggleShow={() => handleActiveComponent(1)}

            />
            <Component
                title="About Team"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, consequatur eaque? Eaque, eveniet numquam vel tempora nihil asperiores, molestiae culpa architecto provident, fugit magnam soluta quae doloremque! Error nulla dolorum quisquam atque. Quas officiis vitae tempora? Quasi asperiores, expedita ipsam quaerat ratione voluptate nisi illo perspiciatis soluta, sit veritatis aperiam eaque voluptates dicta quae similique ducimus voluptatum saepe omnis numquam fugiat incidunt autem, nam officia. Cumque nihil ipsa vel cum a molestiae repellendus laboriosam, officia, alias totam debitis culpa porro accusantium! Dolor, quaerat consequatur eaque odio, eligendi optio aliquam adipisci distinctio porro asperiores corporis repellendus sint earum. Amet corrupti accusantium ducimus, aspernatur est reprehenderit non neque quod quis facere totam dolor natus numquam asperiores unde, vero fugit iure commodi necessitatibus. Vel sapiente officia expedita maiores, quam tenetur temporibus. Aut consectetur, nam unde sit incidunt dignissimos eius. Ab magni aperiam voluptatem natus tempore tenetur aliquid. Omnis quibusdam ipsum ex cum illo tempore, vel numquam cumque, molestias dolor at, ut sed aperiam saepe reiciendis asperiores veniam modi facere recusandae eaque alias harum aliquid ducimus. Consequatur mollitia velit nihil sed obcaecati tenetur quas eveniet nostrum, sunt est veritatis ea vitae eaque laborum optio ut inventore sit exercitationem. Reprehenderit consequatur et laborum vitae nam."
                isActive={activeComponent === 2}
                onToggleShow={() => handleActiveComponent(2)}
            />
            <Component
                title="About Instamart"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, consequatur eaque? Eaque, eveniet numquam vel tempora nihil asperiores, molestiae culpa architecto provident, fugit magnam soluta quae doloremque! Error nulla dolorum quisquam atque. Quas officiis vitae tempora? Quasi asperiores, expedita ipsam quaerat ratione voluptate nisi illo perspiciatis soluta, sit veritatis aperiam eaque voluptates dicta quae similique ducimus voluptatum saepe omnis numquam fugiat incidunt autem, nam officia. Cumque nihil ipsa vel cum a molestiae repellendus laboriosam, officia, alias totam debitis culpa porro accusantium! Dolor, quaerat consequatur eaque odio, eligendi optio aliquam adipisci distinctio porro asperiores corporis repellendus sint earum. Amet corrupti accusantium ducimus, aspernatur est reprehenderit non neque quod quis facere totam dolor natus numquam asperiores unde, vero fugit iure commodi necessitatibus. Vel sapiente officia expedita maiores, quam tenetur temporibus. Aut consectetur, nam unde sit incidunt dignissimos eius. Ab magni aperiam voluptatem natus tempore tenetur aliquid. Omnis quibusdam ipsum ex cum illo tempore, vel numquam cumque, molestias dolor at, ut sed aperiam saepe reiciendis asperiores veniam modi facere recusandae eaque alias harum aliquid ducimus. Consequatur mollitia velit nihil sed obcaecati tenetur quas eveniet nostrum, sunt est veritatis ea vitae eaque laborum optio ut inventore sit exercitationem. Reprehenderit consequatur et laborum vitae nam."
                isActive={activeComponent === 3}
                onToggleShow={() => handleActiveComponent(3)}
            />
            <Component
                title="Testimonials"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, consequatur eaque? Eaque, eveniet numquam vel tempora nihil asperiores, molestiae culpa architecto provident, fugit magnam soluta quae doloremque! Error nulla dolorum quisquam atque. Quas officiis vitae tempora? Quasi asperiores, expedita ipsam quaerat ratione voluptate nisi illo perspiciatis soluta, sit veritatis aperiam eaque voluptates dicta quae similique ducimus voluptatum saepe omnis numquam fugiat incidunt autem, nam officia. Cumque nihil ipsa vel cum a molestiae repellendus laboriosam, officia, alias totam debitis culpa porro accusantium! Dolor, quaerat consequatur eaque odio, eligendi optio aliquam adipisci distinctio porro asperiores corporis repellendus sint earum. Amet corrupti accusantium ducimus, aspernatur est reprehenderit non neque quod quis facere totam dolor natus numquam asperiores unde, vero fugit iure commodi necessitatibus. Vel sapiente officia expedita maiores, quam tenetur temporibus. Aut consectetur, nam unde sit incidunt dignissimos eius. Ab magni aperiam voluptatem natus tempore tenetur aliquid. Omnis quibusdam ipsum ex cum illo tempore, vel numquam cumque, molestias dolor at, ut sed aperiam saepe reiciendis asperiores veniam modi facere recusandae eaque alias harum aliquid ducimus. Consequatur mollitia velit nihil sed obcaecati tenetur quas eveniet nostrum, sunt est veritatis ea vitae eaque laborum optio ut inventore sit exercitationem. Reprehenderit consequatur et laborum vitae nam."
                isActive={activeComponent === 4}
                onToggleShow={() => handleActiveComponent(4)}
            />
            <Component
                title="Contact"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, consequatur eaque? Eaque, eveniet numquam vel tempora nihil asperiores, molestiae culpa architecto provident, fugit magnam soluta quae doloremque! Error nulla dolorum quisquam atque. Quas officiis vitae tempora? Quasi asperiores, expedita ipsam quaerat ratione voluptate nisi illo perspiciatis soluta, sit veritatis aperiam eaque voluptates dicta quae similique ducimus voluptatum saepe omnis numquam fugiat incidunt autem, nam officia. Cumque nihil ipsa vel cum a molestiae repellendus laboriosam, officia, alias totam debitis culpa porro accusantium! Dolor, quaerat consequatur eaque odio, eligendi optio aliquam adipisci distinctio porro asperiores corporis repellendus sint earum. Amet corrupti accusantium ducimus, aspernatur est reprehenderit non neque quod quis facere totam dolor natus numquam asperiores unde, vero fugit iure commodi necessitatibus. Vel sapiente officia expedita maiores, quam tenetur temporibus. Aut consectetur, nam unde sit incidunt dignissimos eius. Ab magni aperiam voluptatem natus tempore tenetur aliquid. Omnis quibusdam ipsum ex cum illo tempore, vel numquam cumque, molestias dolor at, ut sed aperiam saepe reiciendis asperiores veniam modi facere recusandae eaque alias harum aliquid ducimus. Consequatur mollitia velit nihil sed obcaecati tenetur quas eveniet nostrum, sunt est veritatis ea vitae eaque laborum optio ut inventore sit exercitationem. Reprehenderit consequatur et laborum vitae nam."
                isActive={activeComponent === 5}
                onToggleShow={() => handleActiveComponent(5)}
            />
        </div>
    );
};

export default Instamart;
