import React from "react";

export default () => {

    const styles = {
        logoContainer: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
        },
        logoImage: {
            width: '50px',
            height: '50px',
            borderRadius: '50%',
        },
        logoText: {
            fontSize: '2.25rem',
            fontWeight: 'bold',
        },
    }

    return(
        <div style={styles.logoContainer}>
            <a href={"index.html"}>
                <img
                    src="profpic.png"
                    alt="Logo"
                    style={styles.logoImage}
                />
            </a>
            <div style={styles.logoText}>Harold Gao</div>
        </div>
    )
}