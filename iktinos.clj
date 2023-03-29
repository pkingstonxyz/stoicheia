(require '[babashka.fs :as fs])

;; First we get a list of each of the stoicheion folders

(def stoicheion 
  (->> (fs/list-dir "stoicheion/")
       (filterv #(not (fs/hidden? %)))
       (filterv fs/directory?))) 

(prn stoicheion)

;; Then we

