import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { useAuth } from '../context/AuthContext';
import { Trophy, Medal, Star, ShieldCheck, Plus, Edit, Trash2 } from 'lucide-react';
import Modal from '../components/Modal';
import { Achievement } from '../types';

const Achievements: React.FC = () => {
  const { achievements, addAchievement, updateAchievement, deleteAchievement } = useData();
  const { isAuthenticated } = useAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Achievement | null>(null);
  const [formData, setFormData] = useState<Partial<Achievement>>({});

  const handleOpenModal = (e?: React.MouseEvent, item?: Achievement) => {
    if (e) e.stopPropagation();
    if (item) {
        setEditingItem(item);
        setFormData(item);
    } else {
        setEditingItem(null);
        setFormData({ category: 'competition', year: new Date().getFullYear().toString() });
    }
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingItem) {
        updateAchievement({ ...editingItem, ...formData } as Achievement);
    } else {
        addAchievement({ ...formData, id: Date.now().toString() } as Achievement);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (e: React.MouseEvent, id: string) => {
      e.stopPropagation();
      if(window.confirm("Revoke this achievement?")) {
          deleteAchievement(id);
      }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12 flex justify-between items-end">
        <div>
            <h1 className="text-4xl font-bold text-white mb-2">
                <span className="text-cyber-neon">./</span>trophies
            </h1>
            <p className="text-gray-400">Hall of fame and club recognitions.</p>
        </div>
        {isAuthenticated && (
            <button 
                type="button"
                onClick={(e) => handleOpenModal(e)}
                className="bg-cyber-neon text-black px-4 py-2 rounded font-bold flex items-center gap-2 hover:bg-white transition-colors"
            >
                <Plus size={18} /> Add Trophy
            </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
            <div key={achievement.id} className="relative bg-cyber-dark border border-cyber-dim rounded-lg p-6 group hover:border-cyber-neon transition-all hover:shadow-[0_0_15px_rgba(57,255,20,0.15)]">
                
                {isAuthenticated && (
                    <div className="absolute top-2 right-2 z-20 flex gap-2 bg-black/50 p-1 rounded">
                        <button 
                            type="button"
                            onClick={(e) => handleOpenModal(e, achievement)} 
                            className="p-1.5 bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white rounded border border-blue-600/50 transition-colors cursor-pointer"
                        >
                            <Edit size={14} />
                        </button>
                        <button 
                            type="button"
                            onClick={(e) => handleDelete(e, achievement.id)} 
                            className="p-1.5 bg-red-600/20 text-red-400 hover:bg-red-600 hover:text-white rounded border border-red-600/50 transition-colors cursor-pointer"
                        >
                            <Trash2 size={14} />
                        </button>
                    </div>
                )}

                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                    <Trophy size={64} className="text-cyber-neon" />
                </div>

                <div className="flex items-center gap-2 mb-4">
                    {achievement.category === 'competition' ? (
                        <Trophy className="text-yellow-500" size={24} />
                    ) : achievement.category === 'certification' ? (
                        <ShieldCheck className="text-blue-500" size={24} />
                    ) : (
                        <Star className="text-purple-500" size={24} />
                    )}
                    <span className="text-xs font-mono uppercase tracking-widest text-gray-500">
                        {achievement.category}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyber-neon transition-colors">
                    {achievement.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {achievement.description}
                </p>

                <div className="mt-auto flex justify-between items-center pt-4 border-t border-cyber-dim/50">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-mono text-white bg-cyber-dim/30 px-2 py-1 rounded border border-cyber-dim">
                            {achievement.year}
                        </span>
                    </div>
                    {achievement.rank && (
                        <div className="flex items-center gap-1 text-cyber-neon font-bold text-sm">
                            <Medal size={16} />
                            {achievement.rank}
                        </div>
                    )}
                </div>
            </div>
        ))}
      </div>

      {/* Admin Modal */}
       <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={editingItem ? "EDIT_RECORD.EXE" : "NEW_TROPHY.EXE"}
      >
          <form onSubmit={handleSave} className="space-y-4">
              <div>
                  <label className="text-xs font-mono text-gray-500">TITLE</label>
                  <input required className="w-full bg-black border border-gray-700 p-2 text-white rounded focus:border-cyber-neon outline-none" 
                    value={formData.title || ''} onChange={e => setFormData({...formData, title: e.target.value})} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                  <div>
                      <label className="text-xs font-mono text-gray-500">YEAR</label>
                      <input required className="w-full bg-black border border-gray-700 p-2 text-white rounded focus:border-cyber-neon outline-none" 
                        value={formData.year || ''} onChange={e => setFormData({...formData, year: e.target.value})} />
                  </div>
                  <div>
                      <label className="text-xs font-mono text-gray-500">CATEGORY</label>
                      <select className="w-full bg-black border border-gray-700 p-2 text-white rounded focus:border-cyber-neon outline-none"
                          value={formData.category || 'competition'} onChange={e => setFormData({...formData, category: e.target.value as any})}>
                          <option value="competition">Competition</option>
                          <option value="certification">Certification</option>
                          <option value="recognition">Recognition</option>
                      </select>
                  </div>
              </div>
              <div>
                  <label className="text-xs font-mono text-gray-500">RANK (Optional)</label>
                  <input className="w-full bg-black border border-gray-700 p-2 text-white rounded focus:border-cyber-neon outline-none" 
                    placeholder="e.g. 1st Place"
                    value={formData.rank || ''} onChange={e => setFormData({...formData, rank: e.target.value})} />
              </div>
              <div>
                  <label className="text-xs font-mono text-gray-500">DESCRIPTION</label>
                  <textarea required className="w-full bg-black border border-gray-700 p-2 text-white rounded focus:border-cyber-neon outline-none h-24" 
                    value={formData.description || ''} onChange={e => setFormData({...formData, description: e.target.value})} />
              </div>
              
              <button type="submit" className="w-full bg-cyber-neon text-black font-bold py-3 rounded mt-4 hover:bg-white transition-colors">
                  SAVE_RECORD
              </button>
          </form>
      </Modal>
    </div>
  );
};

export default Achievements;