export default function dateFilter(value, format = 'date') {
    const option = {};

    if (format.includes('date')) {
        option.day = '2-digit';
        option.month = '2-digit';
        option.year = 'numeric'
    }

      if (format.includes('time')) {
        option.hour = '2-digit';
        option.minute = '2-digit';
        option.second = '2-digit'
    }

    return new Intl.DateTimeFormat('en-EN', option).format(new Date(value))
}