(require '[babashka.fs :as fs]
         '[clojure.edn :as edn]
         '[clojure.pprint :as p]
         '[clojure.string :as s]
         '[hiccup.core :as h])

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

(p/pprint stoicheion-maps-with-pages)
