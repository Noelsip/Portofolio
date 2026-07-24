import { headerData } from '../../data/headerData';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='shell footer__inner'>
                <p className='footer__name'>{headerData.name}</p>
                <p className='footer__meta'>
                    © {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
}

export default Footer;
