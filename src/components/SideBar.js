import React from "react";

export default function SideBar({onClick}) {
    return (
        <div className="sidenav-container ld-sidenav">
            <div className=" database-features ld-sidenav-back ld-sidenav__slot-container-top">
                <div className="ld-sidenav-navitem ld-typo--cap-l">Database Features</div>
            </div>
            <div onClick={onClick}>
                <div className="ld-sidenav-navitem ld-typo--cap-m">Create</div>
                <div className="ld-sidenav-navitem ld-typo--cap-m">Queue</div>
                <div className="ld-sidenav-navitem ld-typo--cap-m">Active</div>
                <div className="ld-sidenav-navitem ld-typo--cap-m">Completed</div>
                <div className="ld-sidenav-navitem ld-typo--cap-m">Support</div>
            </div>

            <hr />
            <div className="ld-sidenav-navitem ld-typo--cap-m">Create Cell Definition</div>
            <a className="back-home ld-sidenav-navitem ld-typo--cap-m" href="/lims-database">Dashboard</a>
        </div>
    );
}