package ee.karl_reimond.backend.controller;

import ee.karl_reimond.backend.model.Category;
import ee.karl_reimond.backend.model.Category;
import ee.karl_reimond.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
@RestController
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping("category")
    public List<Category> getCategory() {
        return categoryService.getCategory();
    }

    //localgist;8080/category

    @PostMapping("category")
    public String postCategory(@RequestBody Category category) {
        categoryService.saveCategory(category);
        return "kategooria edukalt lisatud" + category.getName();
        //annan midagi jason kujul kaasa, 3 asja peavad sama olema
    }
}
