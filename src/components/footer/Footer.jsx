import css from './Footer.module.css';

function Footer() {
    return (
        <footer>
            <p className={css.copyright}>Copyright © ListingHub 2021. All rights reserved.</p>
        </footer>
    );
}

export default Footer;