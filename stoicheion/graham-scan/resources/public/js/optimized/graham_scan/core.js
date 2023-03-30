// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('graham_scan.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
graham_scan.core.setup = (function graham_scan$core$setup(){
quil.core.frame_rate((30));

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hsb);

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,(0),cljs.core.cst$kw$angle,(0)], null);
});
graham_scan.core.update_state = (function graham_scan$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,cljs.core.mod((cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),cljs.core.cst$kw$angle,(cljs.core.cst$kw$angle.cljs$core$IFn$_invoke$arity$1(state) + 0.1)], null);
});
graham_scan.core.draw_state = (function graham_scan$core$draw_state(state){
quil.core.background.cljs$core$IFn$_invoke$arity$1((240));

quil.core.fill.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var angle = cljs.core.cst$kw$angle.cljs$core$IFn$_invoke$arity$1(state);
var x = ((150) * quil.core.cos(angle));
var y = ((150) * quil.core.sin(angle));
var tr__6514__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width() / (2)),(quil.core.height() / (2))], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__6514__auto__);

return quil.core.ellipse(x,y,(100),(100));
}finally {quil.core.pop_matrix();
}});
graham_scan.core.run_sketch = (function graham_scan$core$run_sketch(){
graham_scan.core.graham_scan = (function graham_scan$core$run_sketch_$_graham_scan(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,"graham-scan",cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(graham_scan.core.update_state))?(function() { 
var G__6634__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(graham_scan.core.update_state,args);
};
var G__6634 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6635__i = 0, G__6635__a = new Array(arguments.length -  0);
while (G__6635__i < G__6635__a.length) {G__6635__a[G__6635__i] = arguments[G__6635__i + 0]; ++G__6635__i;}
  args = new cljs.core.IndexedSeq(G__6635__a,0,null);
} 
return G__6634__delegate.call(this,args);};
G__6634.cljs$lang$maxFixedArity = 0;
G__6634.cljs$lang$applyTo = (function (arglist__6636){
var args = cljs.core.seq(arglist__6636);
return G__6634__delegate(args);
});
G__6634.cljs$core$IFn$_invoke$arity$variadic = G__6634__delegate;
return G__6634;
})()
:graham_scan.core.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(graham_scan.core.setup))?(function() { 
var G__6637__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(graham_scan.core.setup,args);
};
var G__6637 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6638__i = 0, G__6638__a = new Array(arguments.length -  0);
while (G__6638__i < G__6638__a.length) {G__6638__a[G__6638__i] = arguments[G__6638__i + 0]; ++G__6638__i;}
  args = new cljs.core.IndexedSeq(G__6638__a,0,null);
} 
return G__6637__delegate.call(this,args);};
G__6637.cljs$lang$maxFixedArity = 0;
G__6637.cljs$lang$applyTo = (function (arglist__6639){
var args = cljs.core.seq(arglist__6639);
return G__6637__delegate(args);
});
G__6637.cljs$core$IFn$_invoke$arity$variadic = G__6637__delegate;
return G__6637;
})()
:graham_scan.core.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(graham_scan.core.draw_state))?(function() { 
var G__6640__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(graham_scan.core.draw_state,args);
};
var G__6640 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6641__i = 0, G__6641__a = new Array(arguments.length -  0);
while (G__6641__i < G__6641__a.length) {G__6641__a[G__6641__i] = arguments[G__6641__i + 0]; ++G__6641__i;}
  args = new cljs.core.IndexedSeq(G__6641__a,0,null);
} 
return G__6640__delegate.call(this,args);};
G__6640.cljs$lang$maxFixedArity = 0;
G__6640.cljs$lang$applyTo = (function (arglist__6642){
var args = cljs.core.seq(arglist__6642);
return G__6640__delegate(args);
});
G__6640.cljs$core$IFn$_invoke$arity$variadic = G__6640__delegate;
return G__6640;
})()
:graham_scan.core.draw_state)], 0));
});
goog.exportSymbol('graham_scan.core.graham_scan', graham_scan.core.graham_scan);

if(cljs.core.truth_(cljs.core.some((function (p1__5625__5626__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__5625__5626__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,graham_scan.core.graham_scan,cljs.core.cst$kw$host_DASH_id,"graham-scan"], null));
}
});
goog.exportSymbol('graham_scan.core.run_sketch', graham_scan.core.run_sketch);
