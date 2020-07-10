<article class="article">
    <div class="article__image">
        <img src="{{ $article->imagePath }}" alt="{{ $article->title }}">
    </div>

    <h2 class="article__title">{{ $article->title }}</h2>

    <div class="article__info">
        <i class="icon icon-calendar"></i>
        <span>{{ $article->date->toDayDateTimeString() }}</span>
    </div>

    <div class="article__info">
        <i class="icon icon-price-tag"></i>
        <span>{{ $article->tags }}</span>
    </div>

    @if ($article->venue)
        <div class="article__info">
            <i class="icon icon-location"></i>
            <span>{{ $article->venue }}</span>
        </div>
    @endif

    <div class="article__content">
        <p>{{ $article->content }}</p>
    </div>
</article>
