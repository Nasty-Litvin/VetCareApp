import { TitleProps } from './types';
import './style.scss'

const Title = ({text}: TitleProps) => {
    return (
        <div className='title'>{text}</div>
    );
}
 
export default Title;