package mx.edu.utez.model.game;

import mx.edu.utez.model.category.BeanCategory;


public class BeanGames {
    private  int idGames;
    private String name;
    private String imgGame;
    private String date_premiere;
    private BeanCategory category_idCategory;
    private int status;

    public BeanGames() {
    }

    public BeanGames(int idGames, String name, String imgGame, String date_premiere, BeanCategory category_idCategory, int status) {
        this.idGames = idGames;
        this.name = name;
        this.imgGame = imgGame;
        this.date_premiere = date_premiere;
        this.category_idCategory = category_idCategory;
        this.status = status;
    }

    public int getIdGames() {
        return idGames;
    }

    public void setIdGames(int idGames) {
        this.idGames = idGames;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImgGame() {
        return imgGame;
    }

    public void setImgGame(String imgGame) {
        this.imgGame = imgGame;
    }

    public String getDate_premiere() {
        return date_premiere;
    }

    public void setDate_premiere(String date_premiere) {
        this.date_premiere = date_premiere;
    }

    public BeanCategory getCategory_idCategory() {
        return category_idCategory;
    }

    public void setCategory_idCategory(BeanCategory category_idCategory) {
        this.category_idCategory = category_idCategory;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}
