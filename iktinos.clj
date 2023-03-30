(require '[babashka.fs :as fs]
         '[clojure.edn :as edn]
         '[clojure.pprint :as p]
         '[clojure.string :as s]
         '[hiccup.core :as h]
         '[clojure.java.shell :as sh])

;; First we get a list of each of the stoicheion folders

(def stoicheion-dirs 
  (->> (fs/list-dir "stoicheion/")
       (filterv #(not (fs/hidden? %)))
       (filterv fs/directory?))) 


;; Then we get the info for each stoicheion and wrap it into a ma

(defn page-edn-path
  "Returns the path of the page.edn of the given stoicheion"
  [stoicheion]
  (str stoicheion "/page.edn"))

(defn get-edn-from-path
  "Gets the edn data in a particular .edn file provided the path"
  [path]
  (edn/read-string (slurp path)))

(defn get-name
  "Gets the name of an algorithm from the path. I know I should've done this better oopsie"
  [path]
  (second (s/split (str path) #"/")))

(def stoicheion-maps
  (->> stoicheion-dirs
       (mapv #(assoc {} 
                     :dir %1 
                     :out-index (str %1 "/resources/public/index.html") 
                     :data (get-edn-from-path (page-edn-path %1))))
       (mapv #(assoc-in %1 [:data :name] (get-name (:dir %1))))
       ))

;; Then we generate some pages

(defn gen-body-base
  "Generates the body base given a name"
  [nam]
  [:body 
   [:script {:src "js/main.js"}] 
   [:script (str (s/replace nam #"-" "_") ".core.run_sketch()")]])

(defn gen-stoicheion-page
  "Generates a page for a stoicheion"
  [data]
  [:html
   [:head
    [:title (:title data)]]
   (reduce conj (gen-body-base (:name data)) (:content data))])

(def stoicheion-maps-with-pages
  (mapv #(assoc %1
                :page (h/html (gen-stoicheion-page (:data %1))))
        stoicheion-maps))

;; Now we create some maps with tag-based indices for the 
;; purposes of letting the user navigate the site by tag

(defn put-into-tag-map
  "Puts a given stoicheion into a tag map"
  [tag-map stoicheion]
  (let [{out :out-index
      {tags :tags
       title :title} :data} stoicheion]
    (reduce #(assoc %1 %2 (conj (get tag-map %2 []) {:location out :title title})) tag-map tags)))

(def tag-indices
  (reduce put-into-tag-map {} stoicheion-maps-with-pages))

(def order-of-tags
  (reduce #(conj %1 (first %2)) [] (sort-by key tag-indices)))

;; Construct the index page

(defn gen-tag-section
  "Generates the hiccup for a tag section"
  [tag]
  [:div 
   [:h2 tag]
   (reduce conj [:ul] (for [t (get tag-indices tag)] [:li [:a {:href (:location t)} (:title t)]]))])

(def stoicheia
   (reduce #(conj %1 (gen-tag-section %2)) [] order-of-tags))

;(def index-body-base)

(def index-body-base
  [:body 
   [:h1 "Bruh"]])

(def index-page
  [:html
   [:head
    [:title "Stoicheia"]]
   (reduce conj index-body-base stoicheia)])


;; With the creation of the index page and each page of the stoicheia we have all of the data we need

; Create the index page
(spit "index.html" (h/html index-page))

; Create each stoicheion
(doseq [stoicheion stoicheion-maps-with-pages]
  (sh/sh  (sh/sh "ls")) ;Compile the page
  (prn stoicheion) ;Create the accurate file
  )
