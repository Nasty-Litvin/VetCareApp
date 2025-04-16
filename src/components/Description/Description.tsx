import { DescriptionProps } from './types'
import './style.scss'

const Description = ({textDescr}: DescriptionProps) => {
    return (
        <div className="description">{textDescr}</div>
    );
}
 
export default Description;