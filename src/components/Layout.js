
import React, { useRef } from "react";
import style from "./Layout.modules.css";
import PropTypes from "prop-types";
import useScrollSaver from "./useScrollSaver";

export default function Layout({ header, main, footer }) {
    const scrollableDiv = useRef(null);
    useScrollSaver(scrollableDiv, window.location.pathname);
    return (
        <div className={style.Container}>
            <header className={style.Header}>{header}</header>
            <main ref={scrollableDiv} className={style.Main}>
                {main}
            </main>
            <footer className={style.Footer}>{footer}</footer>
        </div>
    );
}

Layout.propTypes = {
    main: PropTypes.element.isRequired,
    header: PropTypes.element,
    footer: PropTypes.element
};





