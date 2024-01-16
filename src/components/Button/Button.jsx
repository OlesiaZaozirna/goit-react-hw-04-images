import css from './Butoon.module.css'

function Button({loadMore}) {
    return (<button className={css.Button} onClick={loadMore}>
        Load more...
    </button>)
}

export default Button;
