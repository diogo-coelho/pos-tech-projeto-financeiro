import { ListProps } from "./ds_list";
import "./DSList.scss";
import { formatDateToStringDate } from "@/shared/utils/DateUtils";
import { formatNumberToMonetaryValueString } from "@/shared/utils/StringUtils";

const DSList = (props: ListProps) => {
  const getClassName = (value: number): string => {
    return value < 0 ? 'danger' : ''
  }

  return (
    <div className="list-container">
      <ul>
        { props.items &&
          props.items.map((item, index) => (
            <li key={index}>
              <div>
                <p>{ item.title }</p>
                <p className={getClassName(item.value)}>{ formatNumberToMonetaryValueString(item.value) }</p>
              </div>  
              <div>
                <p>{ item.date instanceof Date 
                      ? formatDateToStringDate(item.date) 
                      : formatDateToStringDate(new Date(item.date)) }
                </p>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default DSList;