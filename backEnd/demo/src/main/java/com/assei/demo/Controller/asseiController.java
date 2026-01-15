package com.assei.demo.Controller;


import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/assei")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class asseiController {

    @GetMapping("/add")
    public String add(@RequestParam("num1") int one, @RequestParam("num2") int two) {
        int calc = one + two;

        return "아잇찌발 이건 자바 다녀온거여 : "+ calc;
    }

    @GetMapping("/subtract")
    public String subtract(@RequestParam("num1") int one, @RequestParam("num2") int two) {
        int calc = one - two;

        return "아잇찌발 이건 자바 다녀온거여 : "+ calc;
    }
}
