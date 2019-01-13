<div class="headline">
    <div class="headline__head">
        <figure class="image">
            <img src="{{$headline->thumbnail()}}" alt="{{$headline->title}}">
        </figure>
    </div>
    <div class="headline__body">
        <h3 class="headline__body__heading"><a href="/{{$link}}/{{$headline->id}}">{{$headline->title}}</a></h3>
        <div class="headline__body__content">
            <div class="date">
                <div class="day">
                    {{$headline->date->day}}
                </div>
                <div class="month">
                    {{$headline->date->shortEnglishMonth}}
                </div>
                <div class="year">
                    {{$headline->date->year}}
                </div>
            </div>
            <p>{{ str_limit($headline->content, 200) }}</p>
        </div>
        <a class="headline__body__readmore" href="/{{$link}}/{{$headline->id}}">Read More</a>
    </div>
</div>
