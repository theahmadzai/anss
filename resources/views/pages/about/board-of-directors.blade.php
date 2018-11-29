@extends('layouts.master')

@section('title', $title)

@section('content')

    @component('components.head')
        {{ $title }}
    @endcomponent

    <div class="container">
        <div class="container__wide">
            <div class="bod">
                <div class="bod__left">
                    <div class="image">
                        <img src="/img/b1.jpg" alt="">
                    </div>
                </div>
                <div class="bod__right">
                    <h3>Person Name</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, iste? At explicabo quisquam aspernatur similique ipsum esse vel distinctio aliquam iusto illum doloremque unde impedit, quae voluptatem enim quaerat accusamus!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, iste? At explicabo quisquam aspernatur similique ipsum esse vel distinctio aliquam iusto illum doloremque unde impedit, quae voluptatem enim quaerat accusamus!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, iste? At explicabo quisquam aspernatur similique ipsum esse vel distinctio aliquam iusto illum doloremque unde impedit, quae voluptatem enim quaerat accusamus!</p>
                </div>
            </div>

            <div class="bod">
                <div class="bod__left">
                    <div class="image">
                        <img src="/img/b2.jpg" alt="">
                    </div>
                </div>
                <div class="bod__right">
                    <h3>Some Person Name</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, iste? At explicabo quisquam aspernatur similique ipsum esse vel distinctio aliquam iusto illum doloremque unde impedit, quae voluptatem enim quaerat accusamus!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, iste? At explicabo quisquam aspernatur similique ipsum esse vel distinctio aliquam iusto illum doloremque unde impedit, quae voluptatem enim quaerat accusamus!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, iste? At explicabo quisquam aspernatur similique ipsum esse vel distinctio aliquam iusto illum doloremque unde impedit, quae voluptatem enim quaerat accusamus!</p>
                </div>
            </div>
        </div>
    </div>

@endsection
