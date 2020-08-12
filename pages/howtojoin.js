import Menu from '../components/menu';
import Layout from '../layouts/layout';
import React, { Component } from 'react';

export default class extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            nama : '',
            email : '',
            game : '',
            rank : '',
            reason : '',
        }
    }
    handleChange(evt){
        this.setState({
            [evt.target.name] : evt.target.value,
        });
    }
    render(){
        return(
            <Layout>
                <Menu />
                <div>
                    <h2>Masukkan data diri</h2>
                    <label>Nama : </label><input type="text" name="nama" value={this.state.nama} onChange={this.handleChange}/><br/>
                    <label>Email : </label><input type="text" name="email" value={this.state.email} onChange={this.handleChange}/><br/>
                    <label>Game : </label><input type="text" name="game" value={this.state.game} onChange={this.handleChange}/><br/>
                    <label>Rank Sekarang : </label><input type="text" name="rank" value={this.state.rank} onChange={this.handleChange}/><br/>
                    <label>Alasan Mengikuti : </label><input type="text" name="reason" value={this.state.reason} onChange={this.handleChange}/><br/>
                </div>
                <div>
                    <h2>Data Diri Anda</h2>
                    <label>Nama : {this.state.nama}</label><br/>
                    <label>Nama : {this.state.email}</label><br/>
                    <label>Nama : {this.state.game}</label><br/>
                    <label>Nama : {this.state.rank}</label><br/>
                    <label>Nama : {this.state.reason}</label><br/>
                </div>
                <button onClick="">kirim data diri</button>
            </Layout>
        )
    }
}
