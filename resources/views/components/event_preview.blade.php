<div class="articles__item">
    <img src="{{ $article->thumbnailPath }}" alt="{{ $article->title }}">

    <div class="content">
        <h2 class="content__heading">
            <a href="{{ url('events/' . $article->slug) }}">
                {{ $article->title }}
            </a>
        </h2>

        <p class="content__info">
            <i class="icon icon-price-tag"></i>{{ $article->tags }}
        </p>

        <p class="content__info">
            <i class="icon icon-calendar"></i>{{ $article->date->diffForHumans() }}
        </p>

        <p class="content__info">
            <i class="icon icon-location"></i>{{ $article->venue }}
        </p>

        <p class="content__text">
            {{ Str::words($article->content, 25) }}
        </p>

        <a class="content__link" href="{{ url('events/' . $article->slug) }}">Read More</a>
    </div>
</div>
