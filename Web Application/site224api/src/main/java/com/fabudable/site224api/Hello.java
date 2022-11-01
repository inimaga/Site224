package com.fabudable.site224api;

public class Hello {
    private Long id;
    private String content;

    public Hello(Long id, String content) {
        this.id = id;
        this.content = content;
    }

    public Long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }    
}
