<div class="articles__item">
    @include('components.date', ['date' => $article->date])

    <div class="content">
        <h2 class="content__heading">
            <a href="{{ url('news/' . $article->id) }}">
                {{ $article->title }}
            </a>
        </h2>

        <p class="content__info">
            <i class="icon icon-price-tag"></i> {{ $article->tags }}
        </p>

        <p class="content__text">
            {{ str_limit($article->content, 150) }}
        </p>

        <a class="content__link" href="{{ url('news/' . $article->id) }}">Read More</a>
    </div>
</div>
