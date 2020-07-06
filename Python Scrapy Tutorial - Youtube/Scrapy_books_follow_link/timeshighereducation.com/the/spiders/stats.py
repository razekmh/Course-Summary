import scrapy
from ..items import TheItem

class StatsSpider(scrapy.Spider):
    name = 'stats'
    allowed_domains = ['timeshighereducation.com']
    start_urls = ['https://www.timeshighereducation.com/world-university-rankings/2020/world-ranking']

    def parse(self, response):
        items = TheItem()
        title = response.css('.ranking-institution-title')
        items['title'] = title
        print (title)
        yield items