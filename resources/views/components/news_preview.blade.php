<div class="articles__item">
    @include('components.date', ['date' => $article->date])

    <div class="content">
        <h2 class="content__heading">
            <a href="{{ url('news/' . $article->slug) }}">
                {{ $article->title }}
            </a>
        </h2>

        <p class="content__info">
            <i class="icon icon-price-tag"></i> {{ $article->tags }}
        </p>

        <p class="content__text">
            {{ Str::words($article->content, 30) }}
        </p>

        <a class="content__link" href="{{ url('news/' . $article->slug) }}">Read More</a>
    </div>
</div>
