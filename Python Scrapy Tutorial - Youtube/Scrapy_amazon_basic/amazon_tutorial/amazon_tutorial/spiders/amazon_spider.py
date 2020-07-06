import scrapy
from ..items import AmazonTutorialItem

class AmazonSpiderSpider(scrapy.Spider):
	name = 'amazon_spider'
	allowed_domains = ['amazon.com']
	start_urls = ['https://www.amazon.com/gp/new-releases/books']

	def parse(self, response):
		items = AmazonTutorialItem()

		product_name = response.css('#zg-ordered-list .p13n-sc-truncated').extract()
		product_author = response.css('#zg-ordered-list .a-link-normal+ .a-size-small .a-size-small').css('::text').extract()
		product_price = response.css('#zg-ordered-list .p13n-sc-price').css('::text').extract()
		product_imagelink = response.css('#zg-ordered-list img').css('::attr(src)').extract()

		items['product_name'] = product_name
		items['product_author'] = product_author
		items['product_price'] = product_price
		items['product_imagelink'] = product_imagelink

		yield items

		next_page = response.css('.a-last a::attr(href)').get()
		print(f'next_page {next_page}')

		if next_page is not None:
			yield response.follow(next_page, callback=self.parse)


        

