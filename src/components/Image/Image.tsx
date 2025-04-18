import { ImageProps } from './types';

import './style.scss'

const Image = ({url}: ImageProps) => {
    return (
        <img className="img" src={url}/>
    );
}
 
export default Image;