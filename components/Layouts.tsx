import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import { headerMenuItems, menuItems } from "../utils/data";
import Link from 'next/link'
import SearchForm from "./SearchForm";

interface LayoutProps {
    title?: string;
    description?: string;
}

const Layout: FC<LayoutProps> = ({
    title = "AutoChek",
    description = "AutoChek is a platform that helps you to find the best car for you",
    children
}) => {
  return <div className="layout">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="subHead">
        <div className="leftSection">
            Cart <FontAwesomeIcon icon={faCartArrowDown} />
        </div>
        <div className="rightSection mobileView">
            {
                headerMenuItems.map((item, index) => {
                    return <Link href={item.url} key={index}>
                        <a key={index}>
                            <FontAwesomeIcon icon={item.logo} />
                            {item.title}
                        </a>
                    </Link>
                })
            }
        </div>
      </div>
      <div className="mainHead maxWidth1200">
            <Link href="/">
                <a className="brand">
                    Autocheck
                </a>
            </Link>
            <div className="rightSection mobileView">
                <SearchForm />
            </div>
      </div>
      <div className="menuHead">
            <div className="maxWidth1200">
                <div className="leftSection mobileView">
                    <select>
                        <option>All Categories</option>
                    </select>
                </div>
                <div className="rightSection">
                    {
                        menuItems.map((item, index) => {
                            return <Link href={item.url} key={index}>
                                <a key={index}>
                                    {item.title}
                                </a>
                            </Link>
                        })
                    }
                </div>
            </div>
      </div>
    <div className="content">
        {children}
    </div>
  </div>;
}

export default Layout;