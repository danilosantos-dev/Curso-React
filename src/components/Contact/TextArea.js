import styles from './TextArea.module.css'

function TextArea({placeholder, text, name,type, value, handleOnChange}) {
    return(
        <div className={styles.text_control}>

            <label>{text}</label>
            <textarea 
            placeholder={placeholder} 
            name={name}
            type={type}
            onChange = {handleOnChange}
            value={value}
            />

            </div>
        
    )
}

export default TextArea