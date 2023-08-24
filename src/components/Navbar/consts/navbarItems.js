import PeopleIcon from '@mui/icons-material/People';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import DnsIcon from '@mui/icons-material/Dns';

export const mainNavbarItems = [
    {
        id: 0,
        icon: <PeopleIcon />,
        label: 'Tienda',
        route: 'shop',
    },
    {
        id: 1,
        icon: <DnsIcon />,
        label: 'Subscripciones',
        route: 'subscriptions',
    },
    {
        id: 2,
        icon: <ImageIcon />,
        label: 'Aprende',
        route: 'learn',
    },
    {
        id: 3,
        icon: <PublicIcon />,
        label: 'Nosotros',
        route: 'us',
    },
    {
        id: 4,
        icon: <SettingsEthernetIcon />,
        label: 'Contactanos',
        route: 'functions',
    }, 
]
