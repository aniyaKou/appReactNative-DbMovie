// Components/Search.js

import React , { Component } from 'react'
import {StyleSheet, View, TextInput, ActivityIndicator, Button, FlatList } from 'react-native'

import { getFilmsFromApiWithSearchedText } from '../../API/TMDBApi'
import FilmItem from './FilmItem';
import { connect } from 'react-redux'

class Search extends Component {
    constructor(props) {
        super(props)
        this.searchedText = "";//initialisation de la recherche vide
        this.page = 0; //Compteur de page initialisé à 0
        this.totalPages = 0; //nbres page total si on atteint fin ApI initialisé à 0
        this.state = {
            films: [], // array vide
            isLoading: false // par defaut il n'y a pas de chargement
        }
    }

    _searchTextInputChanged(text) {
        this.searchedText = text;
    }

    _searchFilms() {
        this.page = 0 //Reinitialisation liste film apres recherche
        this.totalPages = 0
        this.setState({
            films: []
        }, () => {
            this._loadFilms()
        })  
    }

    _displayLoading() { // systeme de icone loading
        if (this.state.isLoading) {
          return (
            <View style={styles.loading_container}>
              <ActivityIndicator size='large' />
            </View>
          )
        }
      }
    _loadFilms(){
        if (this.searchedText.length > 0) { 
            this.setState({isLoading: true})// Lancement du chargement
            getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => {
                this.page = data.page
                this.totalPages = data.total_pages
                this.setState({
                    films: [ ...this.state.films, ...data.results ], // ajout des films en spread
                    isLoading: false //Arret du chargement
                });
            });
        }
    }

    _displayDetailForFilm = (idFilm) => {
        this.props.navigation.navigate("FilmDetail", {idFilm: idFilm}) // navigation dvers FilmDetail
    }
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput 
            style={styles.textinput} 
            placeholder='Titre du film'
            onChangeText={(text) => this._searchTextInputChanged(text)}
            onSubmitEditing={() => this._loadFilms()}
            />
        <Button  style={{height: 50}}title='Rechercher' onPress={() => this._searchFilms()}/>
        <FlatList
          data={this.state.films}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => 
          <FilmItem 
          film = {item}
            // Ajout d'une props isFilmFavorite pour indiquer à l'item d'afficher un 🖤 ou non
            isFilmFavorite={(this.props.favoritesFilm.findIndex(film => film.id === item.id) !== -1) ? true : false}
            displayDetailForFilm = {this._displayDetailForFilm}/>}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (this.state.films.length > 0 && this.page < this.totalPages){
                this._loadFilms()
              } 
          }}
        />
         {this._displayLoading()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },    
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    }
  })

  const mapStateToProps = state => {
    return {
      favoritesFilm: state.favoritesFilm
    }
  }
  
  export default connect(mapStateToProps)(Search)