import { makeStyles } from '@material-ui/core'

const drawerWidth = 230;

export const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        // transition: theme.transitions.create(["width", "margin"], {
        //     easing: theme.transitions.easing.sharp,
        //     duration: theme.transitions.duration.leavingScreen,
        // }),
        color: "#fff",
        backgroundColor: "#012269",
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap"
    },
    drawermenustate: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: "#fff",
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: "57px",
        },
        backgroundColor: "#fff",
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    footer: {
        marginTop: "1rem",
        padding: "1rem",
        position: "fixed",
        bottom: 0,
        left: drawerWidth,
        width: "100%",
    },
    model: {
        top: `50%`,
        left: `50%`,
        transform: `translate(-${50}%, -${50}%)`,
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        height: "300px",
        borderRadius: "30px",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    modelHead: {
        margin: " 20px 0",
        fontWeight: "bold",
    },
    modelPara: {
        margin: "20px 0px",
        fontSize: "20px",
        color: "#8a8fa7",
    },
    active: {
        color: "#74b138",
    },
    icon: {
        minWidth: "30px"
    },
    primaryIcon: {
        color: theme.palette.primary.main
    },
    collapseIcon: {
        minWidth: "40px",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    collapseImg: {
        cursor: "pointer",
        position: "absolute",
        right: "15px"
    },
    collapse: {
        transform: "rotate(180deg)",
    },
    divider: {
        height: 40,
        margin: 4,
    },
    textPrimary: {
        color: theme.palette.primary.main
    },
    image: {
        height: "25px"
    }
}));