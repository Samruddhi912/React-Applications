import styles from "./Button.module.css"
function Button(){
    const styles={
        backgroundColor: "hsl(246, 70%, 31%)",
        color:" orange",
        padding: "10px 20px",
        border: "none",
        cursor: "pointer"
    }


    return(
        <>
        <button className={styles.button}>Click Me</button>
        <button style={styles}>ClickMe</button>
        </>
    )
    
}

export default Button