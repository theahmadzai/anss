<?php

namespace App\Http\Controllers\Admin;

use App\Category;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCategoryRequest;

class CategoryController extends Controller
{
    public function index()
    {
        return view('admin.categories.index', [
            'categories' => Category::all(),
        ]);
    }

    public function create()
    {
        return view('admin.categories.create');
    }

    public function store(StoreCategoryRequest $request)
    {
        Category::create($request->validated());

        return back()->with('status', 'Category Added Successfully!');
    }

    public function show(Category $category)
    {
        return view('admin.categories.show', [
            'category' => $category,
        ]);
    }

    public function edit(Category $category)
    {
        return view('admin.categories.edit', [
            'category' => $category,
        ]);
    }

    public function update(StoreCategoryRequest $request, Category $category)
    {
        $category = Category::find($category->id)->update($request->validated());

        return back()->with('status', 'Category Updated Successfully!');
    }

    public function destroy(Category $category)
    {
        $category->images()->delete();
        $category->delete();

        return back()->with('status', 'Category Deleted Successfully!');
    }
}
