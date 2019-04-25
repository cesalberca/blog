import { Article } from '../Article'
import { Id } from '../../Id'
import { Markdown } from '../../Markdown'
import { Datetime } from '../../../infraestructure/Datetime'
import { Locale } from '../../language'
import { Length } from '../../Length'

describe('Article', () => {
  it('should get the excerpt', () => {
    const article = Article.create({
      id: Id.fromValue('foo'),
      title: 'foo',
      body: Markdown.fromValue('foo'),
      date: Datetime.fromDate(new Date(2019, 2, 27)),
      locale: Locale.DEFAULT
    })

    const excerpt = article.getExcerpt()

    expect(excerpt).toEqual({
      body: '<p>foo</p>\n',
      date: 'March 27, 2019',
      id: Id.fromValue('foo'),
      title: 'foo',
      locale: 0,
      readingTime: Length.fromMinutes(1)
    })
  })

  it('should get text in the excerpt until the <!--more--> tag', () => {
    const article = Article.create({
      id: Id.fromValue('foo'),
      title: 'foo',
      body: Markdown.fromValue(`foo <!--more-->bar`),
      date: Datetime.fromDate(new Date(2019, 2, 27)),
      locale: Locale.DEFAULT
    })

    const excerpt = article.getExcerpt()

    expect(excerpt.body).toEqual('<p>foo ')
  })

  it('shold return 1 minute length if the article has the same amount of words as in average words per minute', () => {
    const article = Article.create({
      id: Id.fromValue('foo'),
      title: 'foo',
      body: Markdown.fromValue(get180WordsArticle()),
      date: Datetime.fromDate(new Date(2019, 2, 27)),
      locale: Locale.DEFAULT
    })

    const actual = article.getReadingTime()

    expect(actual.minutes).toBe(1)
  })

  it('shold return 2 minutes if the article has the same amount of words as in average words per minute times 2', () => {
    const article = Article.create({
      id: Id.fromValue('foo'),
      title: 'foo',
      body: Markdown.fromValue(get360WordsArticle()),
      date: Datetime.fromDate(new Date(2019, 2, 27)),
      locale: Locale.DEFAULT
    })

    const actual = article.getReadingTime()

    expect(actual.minutes).toBe(2)
  })

  it('shold return 1 minute length if the article is very short', () => {
    const article = Article.create({
      id: Id.fromValue('foo'),
      title: 'foo',
      body: Markdown.fromValue(`It all started`),
      date: Datetime.fromDate(new Date(2019, 2, 27)),
      locale: Locale.DEFAULT
    })

    const actual = article.getReadingTime()

    expect(actual.seconds).toBe(60)
  })
})

function get180WordsArticle() {
  return `It all started with a joke between some friends of mine on Friday night at my house.At the time, we were discussing about how the FBI worked,when Jack came up with the idea of making a prank call to the FBI.\n\nAlthough Steve warned us about it,I made the call myself.I picked up the phone, dialed the number and soon it was calling. As soon as somebody picked up, I started threatening them that I was planning to bomber their headquarter.Immediately after they hanged up we bursted out laughing.\n\nAt the end of the day, I was preparing to go to bed when I heard some noise outside.It sounded like quick footsteps on the porche.And yet it seemed that nobody was out there.\n\nAll of a sudden,I heard the entrance door being banged.Before I could do anything, a dozen of men in black bursted into my room,aimed me with guns, and yelled “FBI.Put your hands up”\n\nI had to explain everything to them .Certainly, If I had know what was going to happen, I would never have made that phone call foo bar baz.`
}

function get360WordsArticle() {
  return `It all started with a joke between some friends of mine on Friday night at my house.At the time, we were discussing about how the FBI worked,when Jack came up with the idea of making a prank call to the FBI.\n\nAlthough Steve warned us about it,I made the call myself.I picked up the phone, dialed the number and soon it was calling. As soon as somebody picked up, I started threatening them that I was planning to bomber their headquarter.Immediately after they hanged up we bursted out laughing.\n\nAt the end of the day, I was preparing to go to bed when I heard some noise outside.It sounded like quick footsteps on the porche.And yet it seemed that nobody was out there.\n\nAll of a sudden,I heard the entrance door being banged.Before I could do anything, a dozen of men in black bursted into my room,aimed me with guns, and yelled “FBI.Put your hands up”\n\nI had to explain everything to them .Certainly, If I had know what was going to happen, I would never have made that phone call. It all started with a joke between some friends of mine on Friday night at my house.At the time, we were discussing about how the FBI worked,when Jack came up with the idea of making a prank call to the FBI.\n\nAlthough Steve warned us about it,I made the call myself.I picked up the phone, dialed the number and soon it was calling. As soon as somebody picked up, I started threatening them that I was planning to bomber their headquarter.Immediately after they hanged up we bursted out laughing.\n\nAt the end of the day, I was preparing to go to bed when I heard some noise outside.It sounded like quick footsteps on the porche.And yet it seemed that nobody was out there.\n\nAll of a sudden,I heard the entrance door being banged.Before I could do anything, a dozen of men in black bursted into my room,aimed me with guns, and yelled “FBI.Put your hands up”\n\nI had to explain everything to them .Certainly, If I had know what was going to happen, I would never have made that phone call. Hello world foo bar lol rofl`
}
