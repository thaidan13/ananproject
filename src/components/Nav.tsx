import { useState, useEffect } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { HiViewList } from "react-icons/hi";
interface NavLink {
    type: string;
    name: string;
    children?: string[];
    link: string;
}

const Nav = () => {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", () => {
            window.innerWidth >= 960 ? setOpenNav(false) : setOpenNav(true);
        });
    }, []);

    const navLink: NavLink[] = [
        {
            type: "parrent",
            name: "Hoàn cảnh",
            children: [
                "Vì trẻ em",
                "Người già",
                "Bệnh hiểm nghèo",
                "Hoàn cảnh khó khăn",
                "Hỗ trợ giáo dục",
                "Bảo vệ môi trường",
            ],
            link: "/hoancanh",
        },
        {
            type: "navLink",
            name: "Đối tác đồng hành",
            link: "/doitac",
        },
        {
            type: "navLink",
            name: "Tin tức cộng đồng",
            link: "/tintuc",
        },
        {
            type: "navLink",
            name: "Blog đời sống",
            link: "/blogdoisong",
        },
    ];
    return (
        <nav className="container m-auto px-4 py-2 bg-white  lg:flex lg:items-center lg:justify-between">
            <div className="flex flex-row justify-between items-center">
                <a href="/trangchu">
                    <span>
                        <p className="text-blue-500 text-2xl">ANNAN</p>
                        <p className="text-pink-500 ">Ví Nhân ái</p>
                    </span>
                </a>
                <button
                    className="cursor-pointer lg:hidden bg-blue-500  text-white py-2 px-4 rounded-lg text-2xl"
                    onClick={() => setOpenNav(!openNav)}
                >
                    <HiViewList />
                </button>
            </div>
            <div
                className={`${
                    openNav ? " opacity-0 hidden" : "  opacity-100"
                }  mt-5 lg:mt-0 transition-opacity duration-300 ease-in-out`}
            >
                <ul className=" lg:flex lg: items-center gap-3">
                    {navLink.map((p, index) => (
                        <li key={index} className="p-2">
                            {p.type === "navLink" ? (
                                <a className="btn" href={p.link}>
                                    {p.name}
                                </a>
                            ) : (
                                <div className="relative parrent-nav">
                                    <button className="btn flex flex-row justify-between items-center">
                                        {p.name}
                                        <BsChevronDown className="mx-2" />
                                    </button>
                                    <ul className="children-nav lg:absolute hidden bg-white shadow lg:w-max">
                                        {p.children?.map((c, index) => (
                                            <li key={index}>
                                                <a
                                                    href="#"
                                                    className="block px-4 py-2 hover:bg-pink-200"
                                                >
                                                    {c}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            {!openNav && (
                <button className="mt-5 lg:mt-0 group relative h-12 w-44 overflow-hidden rounded-lg bg-pink-400 text-lg shadow border">
                    <div className="absolute inset-0 h-3/4 bg-white transition-all duration-300 ease-out group-hover:h-0"></div>
                    <span className="relative text-black group-hover:text-white">
                        Đóng góp ngay
                    </span>
                </button>
            )}
        </nav>
    );
};

export default Nav;
