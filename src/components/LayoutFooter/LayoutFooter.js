import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

import styles from './LayoutFooter.module.scss';

const Footer = () => (
    <footer
        className={classNames({
            'site-footer': true,
            [styles.footer]: true,
        })}
    >
        <div className={styles.container}>
            <p>
                © 2013–2019{' '}
                <a href="https://phalt.github.io/">Paul Hallett</a> and{' '}
                <a href="https://github.com/PokeAPI/pokeapi#contributing">
                    PokéAPI contributors
                </a>
                . Pokémon and Pokémon character names are trademarks of
                Nintendo.
            </p>
            <p>
                <Link to="/status">Status Page</Link>
            </p>
        </div>
    </footer>
);

export default Footer;
