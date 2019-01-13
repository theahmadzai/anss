@if($slides)
    <div id="slider" class="slider">
        @foreach ($slides as $slide)
            <div class="slide">
                <img src="{{ $slide->image}}" alt="{{$slide->title}}">
                <p>{{$slide->title}}</p>
                <a href="{{$slide->link}}" target="blank">Read More</a>
            </div>
        @endforeach
    </div>
@endif
