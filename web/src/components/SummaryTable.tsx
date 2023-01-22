import { generateDatesFromBeginning } from "../utils/generate-dates"
import { Habit } from "./HabitDay"

const weekdays = [
    'D',
    'S',
    'T',
    'Q',
    'Q',
    'S',
    'S',
]

const sumaryDates = generateDatesFromBeginning()

const minimumSummaryDatesSize = 18*7
const diasRestantes = minimumSummaryDatesSize-sumaryDates.length


export function SummaryTable() {
    return (
        <div className="w-full flex ">
          <div className="grid grid-rows-7 grid-flow-col gap-3">
           {weekdays.map((day,i)=> {
            return (
                <div key={`${day}-${i}`} className="text-zinc-400 font-bold text-xl h-10 w-10 flex items-center justify-center">
                {day}
                </div>)}
            )
           }  
          </div>
          <div className="grid grid-rows-7 grid-flow-col gap-3">
            {sumaryDates.map(date=>{return(<Habit key={date.toString()}/>)})}
            
            {diasRestantes>0&&Array.from({length: diasRestantes}).map(()=>{
                return (
                    <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-900 rounded-lg opacity-40 cursor-not-allowed"></div>
                )
            })}
          </div>
        </div>
    )
}