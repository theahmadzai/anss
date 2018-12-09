<div class="articles__item">
    <img src="{{ $article->thumbnail() }}" alt="{{ $article->title }}">

    <div class="content">
        <h2 class="content__heading">
            <a href="{{ url('events/' . $article->id) }}">
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
            {{ str_limit($article->content, 150) }}
        </p>

        <a class="content__link" href="{{ url('events/' . $article->id) }}">Read More</a>
    </div>
</div>
