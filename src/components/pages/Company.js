import styles from './Company.module.css'



function Company() {
    return (
        <div className ={styles.container}>
           <div className={styles.child}>    
               <p>Olá, meu nome é Danilo Santos, este projeto foi desenvolvido para o estudo do <span>React.JS</span> no curso do <a href="https://www.youtube.com/c/MatheusBattisti" target="blank">Matheus Battisti</a></p>
           </div>
        </div>
    )
}

export default Company