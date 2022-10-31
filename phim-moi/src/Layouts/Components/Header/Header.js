import ClassNames from 'classnames/bind'
import Box from '@mui/material/box'
import Grid from '@mui/material/grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from './Header.module.scss'
import logo from '../../../Assets/images/logo.png'

const cx = ClassNames.bind(styles)

function Header(){
    return(
        <header className={cx('wrapper')}>
            <div className={cx('header')} id="container">
                <Box className={cx('box')}>
                    <Grid container className={cx('content_grid')}>
                        <Grid item xs={12} sm={6} md={3} className={cx('img')}><img src ={logo} alt='not' className={cx('logo')} /></Grid>
                        <Grid item xs={0} md={6}>
                            <div className={cx('search')}>
                                <input type="text"  placeholder='Nhập từ khóa . . .' />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} className={cx('navbar')}>
                            <ul className={cx('navbar_box')}>
                                <li><FontAwesomeIcon icon={faBars}  className={cx('icon')} /></li>
                                <li><FontAwesomeIcon icon={faBars}  className={cx('icon')} /></li>
                                <li><FontAwesomeIcon icon={faBars}  className={cx('icon')} /></li>
                                <li><FontAwesomeIcon icon={faBars}  className={cx('icon')} /></li>
                            </ul>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </header>
    )
}
export default Header