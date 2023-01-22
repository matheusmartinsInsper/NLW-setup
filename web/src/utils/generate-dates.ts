import dayjs from 'dayjs'

export function generateDatesFromBeginning() {
    const firstDayOfTheYear = dayjs().startOf('year')
    const today = new Date()

    const dates = []
    let compareDate = firstDayOfTheYear

    while(compareDate.isBefore(today)) {
        compareDate=compareDate.add(1,'day')
        dates.push(compareDate.toDate())
       
    }
    return dates
}