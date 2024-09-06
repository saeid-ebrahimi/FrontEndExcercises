from datetime import datetime;

class DateUtil: # we use this kind of naming because utility classes don't instantiate
    @staticmethod
    def get_formatted_today():
        date_today = datetime.now()
        formatted_date = date_today.strftime('%Y-%m-%d')
        return formatted_date
    
print(DateUtil.get_formatted_today())